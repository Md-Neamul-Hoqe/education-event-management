import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import userDefaultImg from "../assets/logo/user.png";
import moment from "moment/moment";

const Conversation = () => {
  const { user } = useContext(AuthContext);
  const [message, setMassage] = useState({ x: [], y: [] });

  const handleConversation = (e) => {
    setMassage("");
    e.preventDefault();

    const Form = new FormData(e.currentTarget);
    const theMessage = Form.get("message");

    setMassage({ x: theMessage });
  };
  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl max-md:text-white text-periwinkle mx-auto lg:my-10">
        <form onSubmit={handleConversation} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text max-md:text-white">
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
              className="border px-5 py-3 max-md:bg-periwinkle"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>

        {message?.x?.length > 0 && (
          <div className="border rounded-box m-5 p-5">
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
              <div className="chat-bubble">{message.x}</div>
              <div className="chat-footer opacity-50">Sent</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={userDefaultImg} />
                </div>
              </div>
              <div className="chat-header">
                Prof. Md. Neamul Hoqe
                <time className="text-xs opacity-50 ms-3">
                  {moment().format("h:mm:ss a")}
                </time>
              </div>
              <div className="chat-bubble">
                How can I help you, please? <br /> I am in developing process.
              </div>
              <div className="chat-footer opacity-50">
                Seen at {moment().format("h:mm:ss a")}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Conversation;
