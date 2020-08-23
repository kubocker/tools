/* firebase */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/storage';

/* app */
import firebaseConfig from './firebaseConfig';

/**
 * Firebase App
 */
export const FirebaseApp = firebase.initializeApp(firebaseConfig);

/**
 * Firestore
 */
export const master = firebase.firestore();

/**
 * Firebase Realtime Database
 */
export const db = firebase.database();

/**
 * FireStore
 */
export const FirebaseStorage = firebase.storage();

/**
 * Firebase Analytics
 */
export const FirebaseAnalytics = firebase.analytics();
