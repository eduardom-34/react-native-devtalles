import { StyleSheet, View } from 'react-native';

// import { ThemedText } from '@/component/themed-text';
// import { ThemedView } from '@/component/themed-view';

export default function ModalScreen() {
  return (
    // <ThemedView style={styles.container}>
    //   <ThemedText type="title">This is a modal</ThemedText>
    //   <Link href="/" dismissTo style={styles.link}>
    //     <ThemedText type="link">Go to home screen</ThemedText>
    //   </Link>
    // </ThemedView>
    <View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
