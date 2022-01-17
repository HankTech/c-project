import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10
  },

  badgeContainer: {
    backgroundColor: '#3777F0',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
    borderColor: 'white',
    borderWidth: 1
  },

  badgeText: {
    color: '#FFF',
    fontSize: 12
  },

  rightContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  name: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18
  },

  date: {
    color: 'gray'
  },

  message: {
    color: 'gray',
    fontSize: 16
  }
})

export default styles
