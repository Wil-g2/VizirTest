import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  Container,
  FormContainer,
  BillContainer,
  ActionContainer,
} from './styles';
import { Bill, Plans } from '../../services/dataService';
import { numberFormat } from '../../utils/numberFormat';

export default () => {
  const [withPlain, setWithPlain] = useState('-');
  const [withinPlain, setWithInPlain] = useState('-');
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const [plans, setPlans] = useState([]);

  const fetchData = async () => {
    const response = await Plans.getAll();
    setPlans(response.data.plans);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data, e) => {
    try {
      const response = await Bill.calculate(data);

      if (response.status === 200) {
        setWithPlain(numberFormat(response.data.withPlan));
        setWithInPlain(numberFormat(response.data.withinPlan));
        e.target.reset();
        toast.success('Simulação realiza com sucesso!');
      }
    } catch (err) {
      console.log(err);
      toast.error('Erro na simulação do plano!');
      setWithPlain('-');
      setWithInPlain('-');
    }
  };

  return (
    <Container>
      <FormContainer>
        <h1>Simular Valor</h1>
        <form onSubmit={handleSubmit(onSubmit)} data-testid="submit">
          <div>
            <input
              name="source"
              type="text"
              data-testid="source"
              placeholder="Origem"
              ref={register({
                required: 'Campo obrigatório',
                maxLength: {
                  value: 3,
                  message: 'Tamanho máximo 3 caracteres',
                },
              })}
            />
            <span>{errors.source && errors.source.message}</span>
          </div>
          <div>
            <input
              name="destination"
              type="text"
              ref={register}
              data-testid="destination"
              placeholder="Destino"
              ref={register({
                required: 'Campo obrigatório',
                maxLength: {
                  value: 3,
                  message: 'Tamanho máximo 3 caracteres',
                },
              })}
            />
            <span>{errors.destination && errors.destination.message}</span>
          </div>
          <div>
            <input
              type="number"
              placeholder="minutes"
              name="time"
              ref={register}
              data-testid="time"
              ref={register({
                required: 'Campo obrigatório',
              })}
            />
            <span>{errors.time && errors.time.message}</span>
          </div>
          <div>
            <select name="plan" ref={register} data-testid="plan">
              {plans.map((value) => (
                <option value={value.title}>{value.title}</option>
              ))}
            </select>
          </div>
          <ActionContainer>
            <Link to="/">Voltar</Link>
            <button type="submit">Calcular</button>
          </ActionContainer>
        </form>
      </FormContainer>
      <BillContainer>
        <h1>Resultado</h1>
        <p>Com FaleMais</p>
        <span> {withPlain}</span>
        <p>Sem FaleMais</p>
        <span> {withinPlain} </span>
      </BillContainer>
    </Container>
  );
};
