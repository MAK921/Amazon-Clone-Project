// import './App.css';
// import Routing from './Router';
// import Footer from './Components/Footer/Footer';
// import { useContext, useEffect } from 'react';
// import { DataContext } from './Components/DataProvider/DataProvider';
// import { auth } from './Utility/firebase';
// import {Type} from './Utility/action.type'


// function App() {
//   const [{ user }, dispatch] = useContext(DataContext);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         // console.log(authUser);
//         dispatch({
//         type:Type.SET_USER,
//         user:authUser
//         })
//       }else{
//        dispatch({
//         type:Type.SET_USER,
//         user:null,
//         })
//       }
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <>
//       <Routing />
//       <Footer />
//     </>
//   );
// }

// export default App;



import './App.css';
import Routing from './Router';
import Footer from './Components/Footer/Footer';
import { useContext, useEffect } from 'react';
import { DataContext } from './Components/DataProvider/DataProvider';
import { auth } from './Utility/firebase';
import { Type } from './Utility/action.type';

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // 🔹 Handle Third-Party Cookie Restrictions
    document.hasStorageAccess().then((hasAccess) => {
      if (!hasAccess) {
        document.requestStorageAccess()
          .then(() => console.log("✅ Storage access granted!"))
          .catch(() => console.warn("⚠️ Storage access denied by user"));
      }
    });

    // 🔹 Firebase Authentication Listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Routing />
      <Footer />
    </>
  );
}

export default App;
