import { PhoneOutlined } from '@ant-design/icons/lib/icons';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: '30px',
        width: '600px',
        margin: 'auto',
        marginTop: '50px',
      }}
    >
      <PhoneOutlined />
      <div>
        There is a phone book in which you can store an unlimited number of
        contacts. To do this, you need to register, and then you can start
        adding your contacts.
      </div>
    </div>
  );
};
export default Home;
