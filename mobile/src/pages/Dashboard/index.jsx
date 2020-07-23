import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Plans, Bill } from "../../services/dataService";
import { useForm } from "react-hook-form";
import {
  Button,
  ButtonText,
  Container,
  CustomTextInput,
  Select,
  Title,
  ResultText,
} from "./styles";

export default () => {
  const [withPlan, setWithPlan] = useState("-");
  const [withinPlan, setWithinPlan] = useState("-");
  const [plan, setPlan] = useState(0);
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await Bill.calculate(data);
      console.log(response);
      if (response.status === 200) {
        setWithPlan(response.data.withPlan);
        setWithinPlan(response.data.withinPlan);
      }
    } catch (err) {
      console.log(err);
      setWithPlan("-");
      setWithinPlan("-");
      Alert.alert("Erro ao tentar calcular!");
    }
  };

  const loadData = async () => {
    try {
      const response = await Plans.getAll();
      setPlans(response.data.plans);
      console.log(response.data.plans);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    register({ name: "source" });
    register({ name: "destination" });
    register({ name: "time" });
    register({ name: "plan" });
  }, [register]);

  const handlePlans = (itemValue) => {
    setPlan(itemValue);
    setValue("plan", itemValue);
  };

  return (
    <Container>
      <Title>Simular valores</Title>
      {!loading && (
        <>
          <Select
            selectedValue={plan}
            onValueChange={(itemValue, itemIndex) => handlePlans(itemValue)}
          >
            {plans.map((item, key) => (
              <Picker.Item label={item.title} value={item.title} key={key} />
            ))}
          </Select>
          <CustomTextInput
            placeholder="Origem"
            onChangeText={(text) => setValue("source", text)}
          />
          <CustomTextInput
            placeholder="Destino"
            onChangeText={(text) => setValue("destination", text)}
          />
          <CustomTextInput
            placeholder="Tempo"
            onChangeText={(text) => setValue("time", text)}
          />
          <Button title="Simular" onPress={handleSubmit(onSubmit)}>
            <ButtonText>Simular</ButtonText>
          </Button>
        </>
      )}
      <ResultText>Com FaleMais: {withPlan}</ResultText>
      <ResultText>Sem FaleMais:{withinPlan}</ResultText>
    </Container>
  );
};
