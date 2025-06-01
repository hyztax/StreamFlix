document.addEventListener('DOMContentLoaded', () => {
  const categories = ['action', 'drama', 'comedy', 'scifi', 'horror'];
  const totalMoviesPerCategory = 100; // 100 movies per category (can increase)

  // Get the container where we add all movie sections
  const movieContainer = document.getElementById('movie-container');

  if (!movieContainer) {
    console.error("No element with id 'movie-container' found!");
    return;
  }

  // Create movie data
  const moviesByCategory = {};

  categories.forEach(category => {
    moviesByCategory[category] = [];
    for (let i = 1; i <= totalMoviesPerCategory; i++) {
      moviesByCategory[category].push({
        category,
        imgUrl: `https://via.placeholder.com/180x270?text=${category}+Movie+${i}`,
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} Movie ${i}`,
      });
    }
  });

  // Create sections and append movie cards (with overlay/buttons)
  function createMovieSection(category, movieList) {
    const section = document.createElement('section');
    section.classList.add('movie-section');

    const h2 = document.createElement('h2');
    h2.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Movies`;
    section.appendChild(h2);

    const movieRow = document.createElement('div');
    movieRow.classList.add('movie-row');
    movieRow.dataset.category = category;

    movieList.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      const img = document.createElement('img');
      img.src = movie.imgUrl;
      img.alt = movie.title;
      img.loading = 'lazy';

      const infoOverlay = document.createElement('div');
      infoOverlay.classList.add('movie-info-overlay');

      const title = document.createElement('div');
      title.classList.add('movie-title');
      title.textContent = movie.title;

      const buttons = document.createElement('div');
      buttons.classList.add('movie-buttons');

      const watchBtn = document.createElement('button');
      watchBtn.textContent = '▶ Watch';
      watchBtn.addEventListener('click', e => {
        e.stopPropagation();
        alert(`Watching: ${movie.title}`);
      });

      const favBtn = document.createElement('button');
      favBtn.textContent = '+ Add to Fav';
      favBtn.addEventListener('click', e => {
        e.stopPropagation();
        alert(`Added to favorites: ${movie.title}`);
      });

      buttons.appendChild(watchBtn);
      buttons.appendChild(favBtn);

      infoOverlay.appendChild(title);
      infoOverlay.appendChild(buttons);

      card.appendChild(img);
      card.appendChild(infoOverlay);

      movieRow.appendChild(card);
    });

    section.appendChild(movieRow);
    movieContainer.appendChild(section);
  }

  // Clear old content if any
  movieContainer.innerHTML = '';

  // Create all category sections
  categories.forEach(category => {
    createMovieSection(category, moviesByCategory[category]);
  });

  // Navigation filter logic
  const navLinks = document.querySelectorAll('.nav-links li[data-category]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const category = link.dataset.category;
      const allRows = document.querySelectorAll('.movie-row');

      allRows.forEach(row => {
        if (category === 'all' || row.dataset.category === category) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // Default: show all categories
  const defaultLink = document.querySelector('.nav-links li[data-category="all"]');
  if (defaultLink) defaultLink.click();
});
