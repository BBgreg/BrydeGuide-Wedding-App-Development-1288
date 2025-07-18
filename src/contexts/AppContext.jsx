// Update the categories array in the initialState
const initialState = {
  currentCategory: 'venue',
  decisions: [],
  currentSession: null,
  timerActive: false,
  timerExpires: null,
  categories: [
    { id: 'wedding_planner', name: 'Wedding Planner', icon: '👰', completed: false },
    { id: 'venue', name: 'Venue', icon: '🏛️', completed: false },
    { id: 'photography', name: 'Photography', icon: '📸', completed: false },
    { id: 'videography', name: 'Videography', icon: '🎥', completed: false },
    { id: 'catering', name: 'Catering', icon: '🍽️', completed: false },
    { id: 'dj', name: 'DJ Services', icon: '🎧', completed: false },
    { id: 'lighting', name: 'Lighting', icon: '💡', completed: false },
    { id: 'photo_booth', name: 'Photo Booth', icon: '📸', completed: false },
    { id: 'florist', name: 'Florist', icon: '🌸', completed: false },
    { id: 'music', name: 'Music', icon: '🎵', completed: false },
    { id: 'cake', name: 'Cake', icon: '🎂', completed: false },
    { id: 'transportation', name: 'Transportation', icon: '🚗', completed: false },
    { id: 'officiant', name: 'Officiant', icon: '👨‍💼', completed: false },
  ],
  // ... rest of the initialState
};