const activities = [
    { 
        id: 1, 
        division_id: 2, 
        title: 'Sarang Semut Music Concert', 
        date: '20 Mei 2024', 
        description: 'Join us for the Sarang Semut Music Concert, an electrifying night of live music performances featuring top bands from our Music division. This event promises to be an unforgettable experience, showcasing a diverse range of musical genres and styles. Whether you are a fan of rock, jazz, or pop, this concert has something for everyone. The bands have been practicing tirelessly to bring you their best performances, so don\'t miss out on this exciting opportunity to enjoy great music in the company of fellow music lovers.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'sarang-semuts-music-concert'
    },
    { 
        id: 2, 
        division_id: 1, 
        title: 'Traditional Dance Night', 
        date: '20 Mei 2024', 
        description: 'Step back in time and immerse yourself in the rich cultural heritage of our region at the Traditional Dance Night. This event is a celebration of our traditional dances, meticulously choreographed and performed by the talented members of our Traditional Dance division. Each dance tells a story, passed down through generations, capturing the essence of our history and traditions. The colorful costumes, rhythmic movements, and live traditional music will transport you to a different era, making this night a truly magical experience.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'traditional-dance-night'
    },
    { 
        id: 3, 
        division_id: 3, 
        title: 'Annual Theatre Showcase', 
        date: '20 Mei 2024', 
        description: 'The Annual Theatre Showcase is an event you won\'t want to miss. This year, our Theatre division has prepared an extraordinary lineup of plays, each offering a unique blend of drama, comedy, and emotion. The performances will take you on a rollercoaster of emotions, from laughter to tears, as our talented actors bring each character to life. The sets, costumes, and lighting have all been carefully designed to enhance the storytelling, creating a truly immersive experience. Whether you are a theatre enthusiast or just looking for a night of great entertainment, this showcase is sure to leave a lasting impression.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'annual-theatre-showcase'
    },
    { 
        id: 4, 
        division_id: 2, 
        title: 'Jazz Night', 
        date: '5 Juni 2024', 
        description: 'Jazz Night is back, and this year it\'s going to be bigger and better than ever. Our Music division\'s talented jazz musicians are ready to serenade you with an evening of smooth, soulful jazz. From classic jazz standards to contemporary compositions, this event will showcase the versatility and talent of our musicians. The intimate setting, combined with the warm tones of jazz, creates a perfect atmosphere for a relaxing evening. Whether you are a jazz aficionado or simply looking to unwind, Jazz Night promises to be an unforgettable experience.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'jazz-night'
    },
    { 
        id: 5, 
        division_id: 1, 
        title: 'Modern Dance Workshop', 
        date: '12 Juni 2024', 
        description: 'Join us for the Modern Dance Workshop, where you can learn and practice the latest dance techniques from our expert instructors. This workshop is designed for dancers of all levels, whether you are a beginner or have years of experience. The focus will be on modern dance styles, with a blend of contemporary and classical influences. Participants will have the opportunity to explore their creativity, improve their technique, and connect with other dancers in a supportive environment. By the end of the workshop, you will have gained new skills and confidence in your dancing abilities.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'modern-dance-workshop'
    },
    { 
        id: 6, 
        division_id: 3, 
        title: 'Improv Night', 
        date: '19 Juni 2024', 
        description: 'Get ready for a night of spontaneity and laughter at Improv Night, where anything can happen! Led by our Theatre division, this event will feature a series of improvisational games and skits that rely entirely on audience suggestions. The quick wit and creativity of our performers will be put to the test as they create hilarious and unexpected scenes on the spot. Whether you are in the mood to participate or just sit back and enjoy the show, Improv Night is sure to keep you entertained from start to finish. It\'s an interactive experience that you won\'t want to miss!',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'improv-night'
    },
    { 
        id: 7, 
        division_id: 2, 
        title: 'Choir Festival', 
        date: '26 Juni 2024', 
        description: 'The Choir Festival is a grand celebration of choral music, bringing together choirs from various universities for a day of harmonious performances. Each choir will present a carefully curated selection of songs, ranging from classical pieces to contemporary favorites. The festival is a unique opportunity to experience the power and beauty of choral singing, as voices blend together to create a rich tapestry of sound. Whether you are a choir enthusiast or simply appreciate beautiful music, the Choir Festival is an event that will leave you inspired and uplifted.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'choir-festival'
    },
    { 
        id: 8, 
        division_id: 1, 
        title: 'Contemporary Dance Show', 
        date: '3 Juli 2024', 
        description: 'The Contemporary Dance Show is an event that pushes the boundaries of dance, showcasing innovative and expressive performances by the Dance division. This show is a celebration of creativity, where dancers explore new forms of movement and storytelling through their art. Each performance is a unique expression of the dancers\' emotions and ideas, brought to life through powerful choreography and captivating music. The show is a must-see for anyone interested in the cutting-edge of dance, offering a glimpse into the future of this dynamic art form.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'contemporary-dance-show'
    },
    { 
        id: 9, 
        division_id: 3, 
        title: 'Drama Competition', 
        date: '10 Juli 2024', 
        description: 'The Drama Competition is a highlight of the year for the Theatre division, where students compete to showcase their acting and storytelling skills. Each team will present a short play, judged on creativity, performance, and impact. This competition is a chance for students to push their limits and explore new ideas, with the best performances being recognized with awards. It\'s a night of intense emotion and powerful performances, as each team strives to tell a story that resonates with the audience and judges alike.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'drama-competition'
    },
    { 
        id: 10, 
        division_id: 2, 
        title: 'Battle of the Bands', 
        date: '17 Juli 2024', 
        description: 'A competition between bands from the Music division to showcase their talents.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'battle-of-the-bands'
    },
    { 
        id: 11, 
        division_id: 1, 
        title: 'Cultural Dance Parade', 
        date: '24 Juli 2024', 
        description: 'A parade featuring traditional and cultural dances from different regions.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'cultural-dance-parade'
    },
    { 
        id: 12, 
        division_id: 3, 
        title: 'Monologue Night', 
        date: '31 Juli 2024', 
        description: 'An evening dedicated to monologues performed by the Theatre division.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'monologue-night'
    },
    { 
        id: 13, 
        division_id: 2, 
        title: 'Acoustic Jam Session', 
        date: '7 Agustus 2024', 
        description: 'A casual jam session featuring acoustic performances by members of the Music division.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'acoustic-jam-session'
    },
    { 
        id: 14, 
        division_id: 1, 
        title: 'Ballet Gala', 
        date: '14 Agustus 2024', 
        description: 'A grand ballet performance by the Dance division\'s ballet troupe.',
        image_link: "https://plus.unsplash.com/premium_photo-1678853633786-c908099f9c0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
        slug: 'ballet-gala'
    },
];


const divisions = [
    {
        id: 1,
        name: "Tari",
        description: "",
    },
    {
        id: 2,
        name: "Musik",
        description: "",
    },
    {
        id: 3,
        name: "Teater",
        description: "",
    },
]

const activityDocumentations = [
    {
        id: 1,
        activity_id: 1,
        name: "Sarang Semut Concert Highlights",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 2,
        activity_id: 1,
        name: "Backstage Moments",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 3,
        activity_id: 2,
        name: "Traditional Dance Night Performance",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 4,
        activity_id: 2,
        name: "Costume Showcase",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 5,
        activity_id: 3,
        name: "Annual Theatre Showcase Rehearsal",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 6,
        activity_id: 3,
        name: "Audience Reactions",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 7,
        activity_id: 4,
        name: "Jazz Night Performance",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 8,
        activity_id: 4,
        name: "Musicians in Action",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 9,
        activity_id: 1,
        name: "Concert Crowd",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    },
    {
        id: 10,
        activity_id: 2,
        name: "Dance Practice Session",
        image_link: "https://images.unsplash.com/photo-1720238281873-51965cef637d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGluZG9uZXNpYSUyMGRhbmNlfGVufDB8fDB8fHww",
    }
];

export {
    activities,
    divisions,
    activityDocumentations
}