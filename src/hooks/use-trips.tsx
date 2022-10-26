import firebase from '@react-native-firebase/firestore';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { COLLECTIONS } from '../config/constants';
import { getCurrentUserId } from '../services/firebase';
import { TripData } from '../types/entities-types';
import { SERVICES } from '../utils';

export const useTrips = () => {
    const [tasks, setTasks] = useState<TripData[]>([]);
    const userId =getCurrentUserId();
    console.log('userId::::>',userId);
    
    useEffect(() => {
        try {
            const subscriber = firebase()
                .collection(COLLECTIONS.trips)
                // .where('userId', '==', userId)
                .onSnapshot(querySnapshot => {
                    console.log('Total users: ', querySnapshot.size);
                    const arr: TripData[] = [];
                    querySnapshot.forEach(documentSnapshot => {
                        arr?.push({...documentSnapshot.data(),id:documentSnapshot?.id})
                    });
                    setTasks(arr);
                });

            // Stop listening for updates when no longer required
            return () => subscriber();
        } catch (error) {
           Alert.alert('',SERVICES?._returnError(error))
        }
    }, []);

    return tasks;
}