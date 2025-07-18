import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dquoljdyughwlgklgcvz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdW9samR5dWdod2xna2xnY3Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NDEwOTMsImV4cCI6MjA2ODMxNzA5M30.aot2bnY3lt-_fAbp79aElMDzCjbjb8s5ZQLHLL0WTG4';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  }
});

// Database helper functions
export const createUser = async (userData) => {
  const { data, error } = await supabase
    .from('users')
    .insert([userData])
    .select();

  if (error) throw error;
  return data[0];
};

export const getUserById = async (userId) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
};

export const updateUser = async (userId, updates) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select();

  if (error) throw error;
  return data[0];
};

// Vendor management
export const getVendorsByCategory = async (category, filters = {}) => {
  let query = supabase
    .from('vendors')
    .select('*')
    .eq('category', category);

  if (filters.maxDistance) {
    query = query.lte('distance_from_milwaukee', filters.maxDistance);
  }

  if (filters.minCapacity) {
    query = query.gte('capacity_maximum', filters.minCapacity);
  }

  if (filters.maxCapacity) {
    query = query.lte('capacity_minimum', filters.maxCapacity);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
};

// Decision management
export const saveUserDecision = async (decisionData) => {
  const { data, error } = await supabase
    .from('user_decisions')
    .insert([decisionData])
    .select();

  if (error) throw error;
  return data[0];
};

export const getUserDecisions = async (userId) => {
  const { data, error } = await supabase
    .from('user_decisions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

// Curation sessions
export const createCurationSession = async (sessionData) => {
  const { data, error } = await supabase
    .from('curation_sessions')
    .insert([sessionData])
    .select();

  if (error) throw error;
  return data[0];
};

// Mood tracking
export const updateMoodTracking = async (moodData) => {
  const { data, error } = await supabase
    .from('mood_tracking')
    .insert([moodData])
    .select();

  if (error) throw error;
  return data[0];
};

export const getMoodHistory = async (userId, limit = 30) => {
  const { data, error } = await supabase
    .from('mood_tracking')
    .select('*')
    .eq('user_id', userId)
    .order('check_in_date', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
};

// Real-time subscriptions
export const subscribeToUserData = (userId, callback) => {
  const channel = supabase
    .channel('user_data_changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'user_decisions',
        filter: `user_id=eq.${userId}`
      },
      callback
    )
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'mood_tracking',
        filter: `user_id=eq.${userId}`
      },
      callback
    )
    .subscribe();

  return channel;
};

export const unsubscribeFromUserData = (channel) => {
  if (channel) {
    supabase.removeChannel(channel);
  }
};