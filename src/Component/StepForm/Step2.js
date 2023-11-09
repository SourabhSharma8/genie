import { Controller } from "react-hook-form";
import Select from "react-select";

const Step2 = ({ register, errors, control }) => {
  return (
    <>
      <div>
        <div className="mb-3">
          <label className="dark-bold mb-1">What's the occasion?</label>
          <input
            {...register("occasion", {
              required: "Please fill the field",
            })}
            placeholder="Birthday"
            className="form-control form-control-sm"
          />
          {errors?.occasion && (
            <p className="text-danger">{errors.occasion.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="dark-bold mb-1">What type of gift would you like?</label>
          <Controller
            name="giftType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />
            )}
          />
           {errors?.giftType && (
            <p className="text-danger">Please fill the field</p>
          )}
        </div>
       
        <div className="mb-3">
          <label className="dark-bold mb-1">
            What's the maximum you are willing to spend?
          </label>
          <div className="input-group">
            <input
              {...register("currency", {
                required: "Currency is required",
              })}
             
              className="form-control form-control-sm w-25"
              placeholder="USD"
            />
            <input
              {...register("maxValue", { required: "Value is required" })}
              className="form-control w-25 form-control-sm  ms-5 me-5 "
              placeholder="50"
            />
          </div>
          {errors?.currency && (
            <p className="text-danger">{errors.currency.message}</p>
          )}
          {errors?.maxValue && (
            <p className="text-danger">{errors.maxValue.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="dark-bold mb-1">
            What country should we return the result for?
          </label>
          <Controller
            name="country"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "usa", label: "USA" },
                  { value: "canada", label: "Canada" },
                  { value: "uk", label: "UK" },
                ]}
              />
            )}
          />
           {errors?.country && (
            <p className="text-danger">Please fill the field</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Step2;
