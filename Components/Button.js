import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label,theme }) {

  if (theme === "primary") {
    return (
      <View
      style={[styles.secondaryContainer, { borderWidth: 2, borderColor: "#0058AC", borderRadius: 5
     }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => alert('You pressed a button.')}
        >
          
          <Text style={[styles.buttonLabel, { color: "#0058AC" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor:'#0058AC',
    borderRadius: 5
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor:'#fff',
    borderRadius: 5
  }
})