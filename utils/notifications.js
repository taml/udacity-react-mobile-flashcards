import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NOTIFICATIONS_STORAGE_KEY = 'MobileFlashcards:notifications'

export const checkForAndScheduleNotifications = async () => {

    const notificationData = await AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
    const hasUserCompletedQuizToday = notificationData != null ? JSON.parse(notificationData) : false

    if (hasUserCompletedQuizToday === false) {
        const status = await Notifications.getPermissionsAsync()
        if (status.granted || ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {

            await Notifications.cancelAllScheduledNotificationsAsync()

            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
                }),
            })

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "📣 Let\'s Quiz!",
                    body: 'You\'ve not studied today, why not test your knowledge now!',
                },
                trigger: { 
                    seconds: 24 * 60 * 60,
                    repeats: true, 
                },
            })

            await AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(true))

        } else {
            await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                    allowAnnouncements: true,
                },
            })
        }
    }
}

export const cancelNotifications = async () => {
    try {
        await AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(false))
        await Notifications.cancelAllScheduledNotificationsAsync()
    } catch(e) {
        console.log(e)
    }
}