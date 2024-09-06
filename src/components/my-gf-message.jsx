import { useEffect, useState } from "react";

const Lettermsg = () => {
  const [showLetter, setShowLetter] = useState(false);

  // useEffect(() => {
  //   console.log('useEffect triggered');
  // }, []);

  return ( 
    <div className="message-container">
      <button className="toggle-button" onClick={() => setShowLetter(!showLetter)}>
        { showLetter ? 'Hide' : 'Show'} Details
      </button>
      { showLetter && <div className="message-container" style={{textAlign: "justify"}}>
        <p>My baby,</p>

          <p>To my love, to someone who makes me feel so special, to someone I want to spend the rest of my life. Baby, you know that I'm not good at expressing my feelings through words, not like you, but I just want you to know that you make me feel like I matter. You make me feel seen and heard. I just wanted to tell you that I appreciate you for that. I appreciate everything that you do, may it be small or big. I sincerely appreciate the effort you put in to keep our relationship considering we are apart most of the time, for every meal that you've paid for, for every place that you take me, for every gift you've given me, for putting up my mood swings, for satisfying my cravings, for taking care of me when I feel sick, and for always making me feel special and loved.</p>

          <p>I will always be thankful for you, love. Thank you for checking up on me when I needed it most. Though I don't want to make you worry about, thank you for being so thoughtful and caring. Thank you for talking to me when I needed someone to talk to. Thank you for listening to me and for understanding my situation always. Thank you for just being there. Thank you for taking the time out of your day to show me how much you care. Thank you for making time for me even in your busy days.</p>

          <p>I wanna assure you that I only want you and will never be in a competition with another guy no matter what. I don't care what other looks like, what they got and who they are, you will always be above them, the most handsome in my eyes. You're literally the sweetest and kindest and most genuine man I've ever met in my entire life. I'm going to support you and be there with you through thick and thin, through highs and lows, in light and darkness. I hope you wins in life with or without me by your side. Baby, I want to see you on the top living the best life, you deserve all the best things in this world baby.</p>

          <p>You always tell me how lucky you are to have me but I will always remind you that you're the best guy I've ever met and I'm actually the one who's lucky to have someone like you. And I hope to be better so I can confidently tell the whole world that I deserve you.</p>

          <p>Baby, you're my safest place, my comfort, and my home. You always understand every version of me, every personality I have, and every emotion I feel. You embrace my traumas and accept my imperfections. You let me experience the things I haven't experience before. I will always treasure and be grateful for having you, love. You exist in my world in a way that no one does. I'll stay because I know that you'll do the same.</p>

          <p>Above all, thank you for accepting me and choosing to love me each and everyday. Mahal na mahal kita palagi mahal ko!</p>

                    <p style={{textAlign: "right"}}>Love,
                    Your Wife</p>
      </div>
     }
    </div>
   );
}
 
export default Lettermsg;