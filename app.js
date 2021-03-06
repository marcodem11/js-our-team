const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  const teamContainerElement = document.querySelector('.team-container');

  for(let i=0; i<team.length; i++) {

    const teamMember = team[i]
    const name = teamMember.name;
    const image = teamMember.image;
    const role = teamMember.role;

    const htmlCard = `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${ image }"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${ role }</p>
      </div>
    </div>
    `;

    teamContainerElement.innerHTML += htmlCard;
  }

  function newTeamMember( name, image ,role) {
      
    return {
        name: name,
        image: image,
        role: role,
    }

    console.log(name,image,role);
  }

  function stampaMembroTeam(teamMember){
    const htmlCard = getHTMLCard(teamMember);
    teamContainerElement.innerHTML += htmlCard;
  }

  const button = document.getElementById('addMemberButton');
  button.addEventListener('click', addNewMember);

  const nameInput = document.getElementById('name');
  const imageInput = document.getElementById('image');
  const roleInput = document.getElementById('role');

  function addNewMember() {
      const name = nameInput.value;
      const image= imageInput.value;
      const role= roleInput.value;

      if(!name || !image || !role){
          alert('I dati inseriti non sono corretti.');
          return;
      }

      console.log(name, image, role);

      const teamMember = newTeamMember(name, image, role);
      console.log(teamMember);

      team.push ( teamMember );

      stampaMembroTeam(teamMember);

      nameInput = '';
      imageInput = '';
      roleInput = '';
  }