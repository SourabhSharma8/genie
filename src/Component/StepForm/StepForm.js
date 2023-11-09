import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Step2 from "./Step2";
import Step1 from "./Step1";
import { SaveFormData } from "../../Redux/Actions/StepFormAction";
import { useNavigate } from "react-router-dom";

const  TwoStepForm=()=> {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const payload = {
        age: data.age,
        country: data.country.value,
        currency: data.currency,
        gender: data.gender,
        giftType: data.giftType.value,
        likes: data.likes,
        maxValue: data.maxValue,
        occasion: data.occasion,
        recipient: data.recipient,
      };
      dispatch(SaveFormData(payload));
      navigate("/result")
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-3 font-fam">
      <div className="col-md-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <Step1 register={register} errors={errors} control={control} />
          )}
          {step === 2 && (
            <Step2 register={register} errors={errors} control={control} />
          )}
          <div className="mt-3">
            {step === 1 && (
              <>
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
                <p className="text-center mb-5"> Step 1/2</p>
              </>
            )}

            {step === 2 && (
              <button
                type="button"
                className="btn btn-outline-dark ps-5 pe-5 me-3 ms-3"
                onClick={() => setStep(1)}
              >
                Back
              </button>
            )}
            {step === 2 && (
              <>
                <button
                  type="submit"
                  className="btn btn-gradient text-white ps-5 pe-5 "
                >
                  Genrate Gift ideas
                </button>
                <p className=" text-center mt-2"> Step 2/2</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default TwoStepForm;
