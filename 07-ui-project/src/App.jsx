import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse officiis harum maxime itaque sit veritatis.",
      tag: "Satisfied",
      color: "royalblue",
    },
    {
      img: "https://images.unsplash.com/photo-1571365689578-618663443bd7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio ipsam nihil aut deleniti temporibus vero.",
      tag: "Underserved",
      color: "orange",
    },
    {
      img: "https://images.unsplash.com/photo-1765648763912-03115da05d07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam non praesentium recusandae, iure omnis nobis.",
      tag: "Underbanked",
      color: "red",
    },
    {
      img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dolores ipsum animi mollitia quidem hic inventore.",
      tag: "Underserved",
      color: "green",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore dolores ipsum animi mollitia quidem hic inventore.",
      tag: "Satisfied",
      color: "gray",
    },
  ];

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
