import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import userDefaultImg from "../assets/logo/user.png";
import moment from "moment/moment";

const Conversation = () => {
  const { user } = useContext(AuthContext);
  const [message, setMassage] = useState([]);
  const handleConversation = (e) => {
    setMassage("");
    e.preventDefault();

    console.log(e.currentTarget);
    const Form = new FormData(e.currentTarget);
    const theMessage = Form.get("message");

    // setMassage(...message, `'${theMessage}'`);
  };
  return (
    <>
      <Navbar />

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleConversation} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Send as {user.displayName || user.email}
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              rows="5"
              className="border px-5 py-3"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>

        <div className="border rounded-box">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || userDefaultImg} />
              </div>
            </div>
            <div className="chat-header">
              {user.displayName || user.email}
              <time className="text-xs opacity-50 ms-3">
                {moment().format("h:mm:ss a")}
              </time>
            </div>
            <div className="chat-bubble">{message[0]}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
