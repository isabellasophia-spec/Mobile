import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
return (
<>
    <Stack.Screen options={{ title: 'Ops! Página não encontrada...' }} />
    <View style={styles.container}>
        <Link href="/(tabs)?index" style={styles.button}>
            Vá para a página inicial!
        </Link>
    </View>
</>
);
}

const styles = StyleSheet.create({
container:
{
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center',
},

button: {
    fontSize: 20,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: '#fff',
},
});