import React, { useState } from "react";
import { BsEmojiHeartEyesFill, BsFillPatchPlusFill } from "react-icons/bs";
import data from "@emoji-mart/data"; 
import Picker from "@emoji-mart/react";

const Emoji = () => {
  const [showEmoji, setShowEmoji] = useState (false);
  const [text, setText] = useState("");

  const addEmoji = (e) => { 
   const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  return (
    <div className="pt-3rem w-[90%] sm:w-[70%] mx-auto bg-violet-500">
      <h1 className="text-2 font-medium text-center capitalize text-dyBg">
        Emoji Search Appliation
      </h1>

      <div>
        <form className="flex items-start gap-2 pt-2rem">
          <div className="w-full flex items-end p-2 bg-byBg rounded-sm relative">
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
              className="w-full bg-transparent outline-none resize-none text-sm"
              cols="30"
              rows="2"
            ></textarea>

            <span
            onClick={() => setShowEmoji(!showEmoji)}
             className="cursor-pointer hover:text-slate-300">
              <BsEmojiHeartEyesFill />
            </span>

            { showEmoji && <div className="absolute top-[100%] right-2">
              <Picker 
              data={data} 
              emojiSize={25} 
              emojiButtonSize={40} 
              onEmojiSelect={addEmoji}
              maxFrequentRows={0}
               />
            </div>}
          </div>

          <button className="flex items-center capitalize gap-2 bg-pink-600 text-blue-300 py-4 px-3 rounded-sm hover:bg-pink-400">
            <BsFillPatchPlusFill />
            add
          </button>
        </form>
      </div>


      <div className=" bg-green-700  mt-10 ">
        <p>Click On the Emoji button </p>
      </div>

      <div className="w-[9%] bg-blue-400 m-10 flex md:h-20 rounded-full ">
      </div>
      <div className="w-[9%] bg-yellow-500 m-10 flex md:h-20 rounded-full ">
      </div>
      <div className="w-[9%] bg-red-600 m-10 flex md:h-20 rounded-full ">
      </div>
      <div className="w-[9%] bg-green-700 m-10 flex md:h-20 rounded-full ">
      </div>
    </div>
  );
};

export default Emoji;
