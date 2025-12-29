import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Sujwal"
        age={22}
        img="https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/568456775_1868394874087400_2011089953604330092_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XIKXCVBtvjcQ7kNvwHstidq&_nc_oc=Adnabw9tx_QJFOKrizPZOv8q6UtMzD6QsgSG0V5t-zmACWFUTvSKwm9WcHCNVnNPcgkwCwEKptB89fEQfV-Isuqp&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=DQwqTn9GZwK8G8t_Nfbuhw&oh=00_Afkg_3ytt5pk2BpvUtKJ7deWyr_rnrwiJ-zwx9zrehc87A&oe=69572956"
      />
      <Card
        user="Eren"
        age={19}
        img="https://i.pinimg.com/736x/d4/69/49/d469498d11bed69e289d8dacc8b7eae9.jpg"
      />
      <Card
        user="Krugar"
        age={38}
        img="https://static1.personalitydatabase.net/2/pdb-images-prod/37f8817f/profile_images/e4ce297f94e64ac8830e1daea39e89b6.png"
      />
    </div>
  );
};

export default App;
