import { useEffect, useState } from "react";
import { useHeaderColor } from "~/context";
import emailjs from 'emailjs-com';

type CloseModalFunction = () => void;

function Modal({ onClose }: { onClose: CloseModalFunction }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <p className="font-neueRegular text-xl text-center">Votre message a bien été envoyé !</p>
        <button onClick={onClose} className="block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded">
          Fermer
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const { setHeaderColor } = useHeaderColor();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    emailjs.init('IoYqcS-FyoRAsKFCH');
    setHeaderColor("mainColor")
  }, [setHeaderColor]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    emailjs.send("service_bws8nok", "template_xk52e9b", {
      user_name: name,
      message: message,
      user_email: email,
      user_object: subject,
    })
      .then((response) => {
        console.log('Email envoyé avec succès !', response);
        setShowModal(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      });
  };

  return (
    <div className="flex-col flex gap-20 mx-20">
      {/* Contenu du composant */}
      <div className="">
        <p className="text-title text-orange  font-neueRegular">Créons</p>
        <p className="text-title text-orange  font-neueRegular">ensemble.</p>
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
      <div className="flex flex-col gap-3 items-center">
        <div className="flex justify-between w-full">
          <span className="flex-col flex gap-1 items-start">
            <p className="font-inter mb-1">Nom</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-fit p-2 rounded-[10px] bg-mainColor border border-black min-w-[530px] min-h-[65px]" />
          </span>
          <span className="flex-col flex gap-1 items-start">
            <p className="font-inter mb-1">Prénom</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-fit p-2 rounded-[10px] bg-mainColor border border-black min-w-[530px] min-h-[65px]" />
          </span>
        </div>
      </div>
      {/* <div className="flex-col flex gap-3 mx-auto">
        <div className="flex justify-around">
          <div>
            <p className="font-inter mb-1">Nom</p>
            <input value={name} onChange={(e) => setName(e.target.value)} className="p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
          </div>
          <div>
            <p className="font-inter mb-1">Email</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
          </div>
        </div>
        <div className="my-10">
          <p className="font-inter mb-1">Object</p>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} className="p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]" />
        </div>
        <div className=" mt-10">
          <p className="font-inter mb-1">Message</p>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[635px] h-[190px]" />
        </div>
        <div onClick={handleSendEmail} className="hover:cursor-pointer border-black bg-black border mt-5 mr-[10px] rounded-3xl px-5 py-3 w-[200px] mx-auto">
          <p className="leading-[17.5px] font-bold text-sm text-center text-white uppercase">Envoyez</p>
        </div>
      </div> */}
    </div>
  );
}

