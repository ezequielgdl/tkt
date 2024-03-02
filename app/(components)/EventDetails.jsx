// components/EventDetails.js

const EventDetails = () => {
  return (
    <div className="bg-BgColor text-white min-h-screen">
      <div className="flex px-32 py-12">
        <img src="../favicon.ico" alt="event-image" className="h-64 mr-16" />
        <div>
          <h1 className="text-6xl">EVENT TITLE</h1>
          <p className="text-2xl">20/05/2023</p>
          <p className="text-2xl">VENUE</p>
          {/* Add more event details here */}
          <button className="bg-Accent/70 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Buy Ticket
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur!
        </p>
      </div>
    </div>
  );
};

export default EventDetails;
