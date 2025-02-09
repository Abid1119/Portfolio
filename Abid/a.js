
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
       
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
        
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
     
        const homeContent = document.querySelector('.home-content p');
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            homeContent.textContent = "Good Morning! Assalamualaikum, This is Abid. Check my skills, projects, and experience.";
        } else if (currentHour < 18) {
            homeContent.textContent = "Good Afternoon! Assalamualaikum, This is Abid. Check my skills, projects, and experience.";
        } else {
            homeContent.textContent = "Good Evening! Assalamualaikum, This is Abid. Check my skills, projects, and experience.";
        }
        