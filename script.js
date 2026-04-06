// JavaScript code to filter and render activities

const activities = [
    { id: 1, name: 'Yoga', type: 'Wellness' },
    { id: 2, name: 'Cooking Class', type: 'Culinary' },
    { id: 3, name: 'Running', type: 'Fitness' },
    { id: 4, name: 'Painting', type: 'Creative' },
];

// Function to filter activities by type
function filterActivities(type) {
    return activities.filter(activity => activity.type === type);
}

// Function to render activities
function renderActivities(filteredActivities) {
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = ''; // Clear existing activities
    filteredActivities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity.name;
        activityList.appendChild(listItem);
    });
}

// Example usage
const wellnessActivities = filterActivities('Wellness');
renderActivities(wellnessActivities);