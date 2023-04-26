import type { InjectionKey, Ref } from "vue";

export const schools = [{link: '', name: 'School of Product' }, {link: '', name: 'School of Data'}, {link: '', name: 'School of Engineering'}];

export const links = [{link: '', name: 'About'}, {link: '', name: 'Blog'}, {link: '', name: 'FAQs'}, {link: '', name: 'Join Our Community'}, {link: '', name: 'Partnership'}];

export const courses = [
    {
      id: 1,
      title: 'Product Design',
      description: 'Design user experiences for products in today’s digital world. Build a portfolio that showcases your ability to transform products.',
      link: '',
      image: '/course1.png'
    },
    {
      id: 2,
      title: 'Data Analytics',
      description: 'Use Python, SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions',
      link: '',
      image: "/course2.png"
    },
    {
      id: 3,
      title: 'Front-End Development',
      description: 'Begin our front-end development program structured to help students launch a new career in web development.',
      link: '',
      image: '/course3.png'
    }
  ]

export const schoolList = [
    {
      name: 'School of Product',
      description: 'We offer you Product courses such as Product Design,Product management and Product marketing by equipping you with the right trainings and guidelines. Become a world class personnel and job-ready candidate in the product field.',
      link: ''
    },
    {
      name: 'School of Systems Engineering',
      description: 'Begin your learning process in Front-End Web Development, Back-End Web Development and more. Discover career opportunities available for you. Speak to professionals and read through materials and the programme designed specifically for you.',
      link: ''
    },
    {
      name: 'School of Data',
      description: 'Even as a newbie in the data analysis space, you can jumpstart your journey and hone your skills by kicking it off with the Axia Africa School of Data Analysis.',
      link: ''
    }
  ];

export const testimonials = [
    {
      name: 'Blessing Fabilola',
      image: '/person1.png',
      testimonial: 'I had no clue where to start in learning Product design, then Axia Africa started an online training and I joined. Within few weeks of coaching I was able to understand both UX & UI. The classes are interesting and gives room to ask questions. Materials provided were helpful. It was a great to learning experience led by the fantastic teachers. I would highly recommend this training if you are a beginner'
    },
    {
      name: 'Samuel Osunleke',
      testimonial: 'Axia Africa’s product design class has been an eye opener and a good starter for me as someone who is a graphic designer but struggles a lot with UX in particular.  I’ve become more confident in my UX process and prowess as a designer and I won’t stop learning!. Thank you Axia.',
      image: '/person2.png'
    },
    {
      name: 'Oyinlola Babalola',
      testimonial: 'Axia Africa has been so helpful to me. I got into tech with zero knowledge of it, didn’t even know my way around a good system. But right now, I know more than I would’ve imagined that I can before I got into the academy. Very helpful, kind, patient and thoughtful teachers too. This training has really helped me! I highly recommend it! Thank youuu.',
      image: '/person3.png'
    },
    {
      name: 'Samuel Ogunshina',
      testimonial: 'Being someone with the passion to learn design, I found it hard to multitask between my days job and my passion for learning. Coupled with this, the fear of learning alone without mentorship made me doubt my ability to learn ui/ux. However, thanks to Axia Africa and their mentorship programs, I have been able to learn what I desired to learn in a convenient space at my own pace. Thanks Axia Africa',
      image: '/person4.png'
    },
    {
      name: 'Feyisayo Olakanmi',
      testimonial: 'I always had a knack for designs but I needed the right platform to put me through and teach me properly, I found that with Axia Africa. At Axia Africa, the tutors are very kind to retake a class for you when you don’t understand a thing. If you are looking for a place where you need an efficient and reliable tutoring then Axia Africa is the right place for you.',
      image: '/person5.png'
    },
    {
      name: 'Dolapo Oyegunle',
      testimonial: "Axia Africa's product design class has taught me a lot of things regarding designs and how to interact with people. I've learnt a lot about the UX and UI processes. Each class has been a perfect blend of learning and fun. Thanks so much for this opportunity Axia Africa",
      image: '/person6.png',
    },
    {
      name: 'Linda Nwodo',
      testimonial: 'Finding Axia Africa and being offered a training on product design was a turning point in my career. The lessons were planned properly and were made flexible to accommodate our different schedules.I will a 100% recommend Axia Africa to anyone who plans to take their career to the next level and is looking for a place to start.',
      image: '/person7.png',
    },
  ]

interface MenuKey {
    modalIsVisible: Ref<boolean>;
    handleOpen(): void;
    handleClose(): void;
}

export const menuKey = Symbol('menu') as InjectionKey<MenuKey>;