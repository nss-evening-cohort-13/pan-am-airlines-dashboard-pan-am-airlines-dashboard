const myNavbar = (name = 'Guest') => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item mx-3"  id="home">
        <a class="navbar-brand" id="home" href="#"><i class="fas fa-globe"></i> PanAm</a>
      </li>
      <li class="nav-item mx-3"  id="airports-link">
        <a class="nav-link" href="#"><i class="fas fa-clipboard"></i> Airports</a>
      </li>
      <li class="nav-item mx-3" id="planes-link">
        <a class="nav-link" href="#"><i class="fas fa-plane-departure"></i> Planes</a>
      </li>
      <li class="nav-item mx-3" id="foods-link">
        <a class="nav-link" href="#"><i class="far fa-bell"></i> Food Services</a>
      </li>
      <li class="nav-item mx-3" id="baggage-link">
        <a class="nav-link" href="#"><i class="fas fa-suitcase-rolling"></i> Baggage</a>
      </li>
      <li class="nav-item mx-3" id="crew-link">
        <a class="nav-link" href="#"><i class="far fa-user"></i> Crew</a>
      </li>
    </ul>

        <ul class="navbar-nav ml-auto">
          <li id='nav-username' class="user-info-nav">${name}</li>
          <li id='btn-login' class="nav-item">
          </li>
          <li id='btn-logout' class="nav-item">
          </li>
        </ul>
      </div>
    </nav>`
  );
};

export default { myNavbar };
