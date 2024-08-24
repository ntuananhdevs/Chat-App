import { useState, useEffect, useRef } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [open, setEmoji] = useState(false);
    const [text, setText] = useState("");
    const emojiRef = useRef(null);

    const handleEmojiClick = (e) => {
        setText((prev) => prev + e.emoji);
    };

    const handleClickOutside = (e) => {
        if (emojiRef.current && !emojiRef.current.contains(e.target)) {
            setEmoji(false);
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="User avatar" />
                    <div className="text">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="icons">
                    <ion-icon name="call"></ion-icon>
                    <ion-icon name="videocam"></ion-icon>
                    <ion-icon name="alert-circle"></ion-icon>
                </div>
            </div>

            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus ipsa beatae voluptas provident voluptatum quidem quae consectetur eos,
                            explicabo numquam dignissimos quasi iste magnam quibusdam nulla magni cupiditate et tempora.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus ipsa beatae voluptas provident voluptatum quidem quae consectetur eos,
                            explicabo numquam dignissimos quasi iste magnam quibusdam nulla magni cupiditate et tempora.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus ipsa beatae voluptas provident voluptatum quidem quae consectetur eos,
                            explicabo numquam dignissimos quasi iste magnam quibusdam nulla magni cupiditate et tempora.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus ipsa beatae voluptas provident voluptatum quidem quae consectetur eos,
                            explicabo numquam dignissimos quasi iste magnam quibusdam nulla magni cupiditate et tempora.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./bg.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus ipsa beatae voluptas provident voluptatum quidem quae consectetur eos,
                            explicabo numquam dignissimos quasi iste magnam quibusdam nulla magni cupiditate et tempora.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <span><ion-icon name="images-outline"></ion-icon></span>
                    <span><ion-icon name="camera-outline"></ion-icon></span>
                    <span><ion-icon name="mic-outline"></ion-icon></span>
                </div>
                <input
                    type="text"
                    placeholder="Type a message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="emoji" ref={emojiRef}>
                    <img
                        src="./emoji.png"
                        alt="Open emoji picker"
                        onClick={() => setEmoji((prev) => !prev)}
                    />
                    <div className="picked">
                        {open && <EmojiPicker onEmojiClick={handleEmojiClick} />}
                    </div>
                </div>
                <div className="sendButton">
                    <ion-icon name="send"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default Chat;

