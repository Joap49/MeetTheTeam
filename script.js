let contentGridElement = document.getElementById("contentGrid");

// Meet the Team page
let membersDatabase = [
  {
    "name" : "Charles Trevail",
    "title" : "Global Chief Executive Officer",
    "yearsHere" : 3,
    "Description" : "Charles Trevail is Interbrand Group Chief Executive Officer, with the responsibility for the leadership of Interbrand, C Space and HMKM. He took this role in 2018, with the goal of redefining branding for the future, bringing together the collective skills of world class branding, customer experience and retail design. This is Trevail’s fifth role at the head of a company, building upon his success at the helm of global customer agency, C Space. Trevail has been a leader in the consulting world for over 25 years. He co-founded the pioneering co-creation consultancy, Promise, in 2003, which was acquired by Omnicom in 2013 and merged with C Space. In 2014, Charles became C Space’s CEO and has led the highly successful transformation, based on the notion of Customer Inspired Growth, leading to Global Agency of the Year in 2017 and 2018. Reinventing brands and businesses by collaborating with customers and stakeholders is Trevail’s business passion. He has advised leading companies and governments internationally, including British Airways, BMW, McDonald’s, Telefonica, and L’Oreal. The Iconic Moves he has been involved in include helping McDonald’s bring its “restaurant of the future” pilot to life in the United Kingdom (UK); Launching the world’s first flat beds in business class with British Airways; Being part of the team that brought Canary Wharf into London’s Docklands; and teaming with microfinance company FINCA on a new ‘barefoot consultant’ initiative, to raise Tanzanian women out of poverty.",
  },
  {
    "name" : "Laura Krajecki",
    "title" : "Global Chief Human Truths Officer",
    "yearsHere" : 4,
    "Description" : "As Global Chief Human Truths Officer, Laura is leading Human Truths across the Interbrand Group of companies.  Laura is an inspirational, visionary leader who consistently “leads from ahead” – setting the vision, pioneering the path & the practice, growing the talent, and innovating the capabilities it takes to lead brands from now to next. Laura is a global consumer insights & brand strategy expert with over 20 years’ experience innovating and inspiring how top global marketers unlock human insights into the audiences that matter most to their business. Prior to joining Interbrand, Laura was Global Head of Human Truths at Google. She also served as the Chief Consumer Officer of Starcom Mediavest Group where she created and led the industry’s strongest, global Human Experience Strategy practice of 150 Human Experience Strategists driving impact across SMGs top 20 global network clients and within countless local markets for the last 13 years. She pioneered and pushed the industry to create un-precedented global consumer insight capabilities worldwide by audience (Youth, Moms, Men) & category (beauty, luxury, food, beverages, automotive, technology, etc.) to unlock the possibilities between people, brands, and technology. Additionally, Laura served as a member of SMG’s Global Executive Leadership Team & Global Product Council shaping the global vision, reputation, product innovation, and industry recognition behind SMGs worldwide success.",
  },
  {
    "name" : "Andy Payne",
    "title" : "Global Chief Creative Officer",
    "yearsHere" : 1,
    "Description" : "Andy Payne manages, enhances, and develops Interbrand’s creative global offering. He joined Interbrand in 1994 and quickly established a track record for great success. Andy has worked on some of the firm’s most prestigious projects and has experience in a diverse range of industries.",
  },
  {
    "name" : "Gonzalo Brujó",
    "title" : "Global Chief Growth Officer",
    "yearsHere" : 2,
    "Description" : "Gonzalo is Global Chief Growth Officer at Interbrand. He leads the regional corporate group, spearheading the growth agenda and supporting marketing and consulting efforts in the region. Gonzalo is a trusted partner of a diverse array of leading companies, multinationals and public institutions, managing strategic projects across every aspect of branding, marketing and communication. He has worked with well-known prestigious companies across all sectors: banking & financial services, telecommunications, automotive, airlines, transport, fashion, luxury, FMCG, food & beverages and technology, amongst others. Gonzalo is also a regular speaker at conferences, a columnist, a published author and a professor at several business schools.",
  }
]


for(var i = 0; i < membersDatabase.length; i++){
  theDatabase(membersDatabase[i]);
}

  function theDatabase(membersDatabase){
  // content item
  let memberInfo = document.createElement("DIV");
  memberInfo.classList.add("contentItem");

  // setting up the member's NAME
  let name = document.createElement("H3");
  name.innerHTML = membersDatabase['name'];
  name.classList.add("Name")
  memberInfo.appendChild(name);
  // console.log(membersDatabase['name']);

  // setting up member's TITLE POSITION
  let titlePosition = document.createElement("h4");
  titlePosition.innerHTML = membersDatabase["title"];
  titlePosition.classList.add("titlePosition")
  memberInfo.appendChild(titlePosition);

  // Years at company
  let years = document.createElement("p");
  years.innerHTML = "Years at Spark: " + membersDatabase["yearsHere"];
  years.classList.add("Years")
  memberInfo.appendChild(years);

  // description of members
  let description = document.createElement("p");
  description.innerHTML = membersDatabase["Description"];
  description.classList.add("Description")
  memberInfo.appendChild(description);

  // Adding this item to the page.
  contentGridElement.appendChild(memberInfo);

}

console.log(theDatabase());
