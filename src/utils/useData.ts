import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from 'firebase/database';
import { useEffect, useState } from 'preact/hooks';
import type { AppData } from './types';

const firebaseConfig = {
  apiKey: 'AIzaSyBtv2qndwIfobf2ONgcRLNFoMAG2wHUqu0',
  authDomain: 'allenjoseph-pe-51a90.firebaseapp.com',
  databaseURL: 'https://allenjoseph-pe-51a90.firebaseio.com',
  projectId: 'allenjoseph-pe-51a90',
  storageBucket: 'allenjoseph-pe-51a90.appspot.com',
  messagingSenderId: '264021348360',
  appId: '1:264021348360:web:afecd609824d9d9abc41bd',
  measurementId: 'G-GJB8QYS0S0',
};

export function useData() {
  const [data, setData] = useState<AppData>();

  useEffect(() => {
    get(child(ref(getDatabase(initializeApp(firebaseConfig))), 'data'))
      .then<AppData>((o) => o.exists() && o.val())
      .then(setData);
  }, []);

  return data;
}
