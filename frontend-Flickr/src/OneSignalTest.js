/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import './App.css';
// import Category from './Category/Category';
// import categories from './Data/data';

function OneSignalTest() {
  window.OneSignal = window.OneSignal || [];
  const { OneSignal } = window;
  useEffect(() => {
    OneSignal.push(() => {
      OneSignal.init(
        {
          appId: '494522f0-cedd-4d54-b99b-c12ac52f66a6', // STEP 9
          notifyButton: {
            enable: true,
          },
          allowLocalhostAsSecureOrigin: true,
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
              acceptButtonText: 'OMG YEEEEESS!',
              cancelButtonText: 'NAHHH',
              categories: {
                tags: [
                  {
                    tag: 'react',
                    label: 'ReactJS',
                  },
                  {
                    tag: 'angular',
                    label: 'Angular',
                  },
                  {
                    tag: 'vue',
                    label: 'VueJS',
                  },
                  {
                    tag: 'js',
                    label: 'JavaScript',
                  },
                ],
              },
            },
          },
          welcomeNotification: {
            title: 'One Signal',
            message: 'Thanks for subscribing!',
          },
        },
        // Automatically subscribe to the new_app_version tag
        // OneSignal.sendTag('new_app_version', 'new_app_version', (tagsSent) => {
        //   // Callback called when tag has finished sending
        //   console.log('new_app_version TAG SENT', tagsSent);
        // }),
      );
    });
  }, []);

  //   const subscriptionHandler = (tag) => {
  //     OneSignal.push(() => {
  //       OneSignal.sendTag('categorty', tag);
  //     });
  //   };

  return (
    <></>
    // <div className="grid-container">
    //   {
    //     // <h1>One Signal - React DEMO</h1>
    //      // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     //  categories.map((category, index) => <Category key={index} {...category} onSubscribe={subscriptionHandler} />)
    //   }
    // </div>
  );
}

export default OneSignalTest;
