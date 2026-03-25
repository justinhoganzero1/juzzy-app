console.log('Simple main.js loaded');

// Wait for DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  document.title = 'Juzzy - Simple Version';
  
  // Basic tab switching
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.dataset.tab;
      console.log('Tab clicked:', tabName);
      
      // Update active states
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const panel = document.getElementById(`tab-${tabName}`);
      if (panel) panel.classList.add('active');
    });
  });
  
  console.log('Simple initialization complete');
});
