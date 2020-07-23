import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  SafeAreaView,
  Picker,
  TextInput,
  Button,
} from "react-native";
import { Plans, Bill } from "../../services/dataService";
import api from "axios";
export default () => {
  const [plan, setPlan] = useState(0);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  // useState([
  //   { name: "FaleMais 30", minutes: 30 },
  //   { name: "FaleMais 60", minutes: 60 },
  //   { name: "FaleMais 120", minutes: 120 },
  // ]);

  const loadData = async () => {
    try {
      // // const response = await Plans.getAll();
      // const response = await api.get("http://localhost:3333/plans");
      // console.log(response.data);
      // setPlan(response.data);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  });

  const handlePlans = (itemValue) => {
    console.log(itemValue);
    setPlan(itemValue);
  };
  return (
    <ScrollView>
      <Text>Simular valores</Text>
      {!loading && (
        <>
          <Picker
            selectedValue={plan}
            onValueChange={(itemValue, itemIndex) => handlePlans(itemValue)}
          >
            {/* {plans.map((index, value) => {
          <Picker.Item key={index} value={value.minutes} label={value.name} />;
        })} */}
            <Picker.Item key={0} value={30} label="FaleMais 30" />
            <Picker.Item key={1} value={60} label="FaleMais 60" />
            <Picker.Item key={2} value={120} label="FaleMais 120" />
          </Picker>
          <TextInput placeholder="Origem" />
          <TextInput placeholder="Destino" />
          <TextInput placeholder="Tempo" />
          <Button title="Simular" onPress={() => alert("click me")} />
        </>
      )}
    </ScrollView>
  );
};
