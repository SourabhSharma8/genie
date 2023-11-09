import { Controller } from "react-hook-form";
import Select from "react-select";

const Step1 = ({ register, errors, control }) => {
  return (
    <>
      <div>
        <div className="mb-3">
          <label className="dark-bold font-fam">Who are you buying for?</label>
          <input
            {...register("recipient", { required: "Please fill the field" })}
            className="form-control form-control-sm"
            placeholder="My mom"
          />
          {errors?.recipient && (
            <p className="text-danger">{errors?.recipient.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="dark-bold mb-1">How old are they?</label>
          <div className="d-flex">
          <input
            {...register("age", { required: "Please fill the field" , })}
            className="form-control w-25  form-control-sm"
            placeholder="35"
          /> <span className="ms-2">year old</span></div>
          {errors?.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <div className="mb-3">
          <label className="dark-bold mb-1">They identify as:</label>
          <div>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Please fill the field" }}
              render={({ field }) => (
                <div>
                  <label className="btn btn-light btn-outline-dark me-3">
                    <input {...field} type="radio" value="female" />
                    Female
                  </label>
                  <label className="btn btn-light btn-outline-dark me-3">
                    <input  {...field} type="radio" value="male" />
                    Male
                  </label>
                  <label className="btn btn-light btn-outline-dark">
                    <input {...field} type="radio" value="male" />
                    Others
                  </label>
                </div>
              )}
            />
            {errors?.gender && (
              <p className="text-danger">{errors.gender.message}</p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="dark-bold mb-1">What do they like to do? Be specific!</label>
          <textarea
            {...register("likes", { required: "Please fill the field" })}
            placeholder="Enter interst and hobbies"
            className="form-control form-control-sm"
            rows="3"
          ></textarea>
          {errors?.likes && (
            <p className="text-danger">{errors.likes.message}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Step1;
