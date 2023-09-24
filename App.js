import React, { useState } from 'react';
import { View, Button, Text, Image } from 'react-native';

const MyComponent = () => {
  const [showFlashlight, setShowFlashlight] = useState(false);
  const [showCounter, setShowCounter] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showImageOne, setShowImageOne] = useState(true);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  const toggleFlashlight = () => {
    setShowFlashlight(!showFlashlight);
    setIsButtonDisabled(true);
  };

  const toggleCounter = () => {
    setShowCounter(!showCounter);
    setIsButtonDisabled(true);
  };

  const toggleImage = () => {
    setShowImageOne(!showImageOne);
    setIsSwitchToggled(!isSwitchToggled);
  };

  const incrementCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const decrementCounter = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  const toggleComponentVisibility = () => {
    setShowFlashlight(null);
    setShowCounter(null);
    setIsButtonDisabled(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 80,
          justifyContent: 'space-evenly',
          width: 390,
        }}
      >
        <Button
          title="Flashlight"
          onPress={toggleFlashlight}
          disabled={isButtonDisabled}
          style={{ width: 200 }}
        />
        <Button
          title="Counter"
          onPress={toggleCounter}
          disabled={isButtonDisabled}
          style={{ width: 200 }}
        />
      </View>
      <View style={{ width: 400, justifyContent: 'center', alignItems: 'center' }}>
        {showFlashlight && (
          <View style={{ width: 340 }}>
            <View style={{ marginBottom: 80 }}>
              {showImageOne ? (
                <Image
                  source={{
                    uri:
                      'https://th.bing.com/th/id/OIP.9aCMfIE5087Ii7mQ1EA0pQHaHa?pid=ImgDet&w=474&h=474&rs=1',
                  }} 
                  style={{ width: 340, height: 340, marginBottom: 50 }}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3OsGDzHN-wPvj2IyzANFwnTJMiFCkiuhJhwfOgX-pl2L1zY&s',
                  }} 
                  style={{ width: 340, height: 340, marginBottom: 50 }}
                />
              )}
              {isSwitchToggled ? (
                <Button title="Off" color={'red'} onPress={toggleImage} style={{ width: 200 }} />
              ) : (
                <Button title="On" color={'#42C32E'} onPress={toggleImage} style={{ width: 200 }} />
              )}
            </View>
            <Button
              title={showFlashlight ? 'Back' : 'Show Component'}
              onPress={toggleComponentVisibility}
            />
          </View>
        )}

        {showCounter && (
          <View style={{ width: 340 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 200, fontWeight: 'bold' }}>{counterValue}</Text>
            </View>
            {
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 60 }}>
                <Button title="+1 Increment" color={'#42C32E'} onPress={incrementCounter} style={{ width: 200 }} />
                <Button title="-1 Decrement" color={'#42C32E'} onPress={decrementCounter} style={{ width: 200 }} />
              </View>
            }
            <View style={{ width: 340, marginTop: 125 }}>
              <Button title={showCounter ? 'Back' : ''} onPress={toggleComponentVisibility} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyComponent;
