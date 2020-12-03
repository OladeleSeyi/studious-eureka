import { object, string } from "yup";
const schema = {
  create: object().shape({
    creatorId: string().min(8).required(),
    personId: string().min(8).required(),
    comment: string().required(),
  }),
};

const validate = {
  async create(params) {
    const valid = await schema.create.isValid(params);
    if (!valid) {
      throw new Error("Validation Error ");
    }
  },
};

export { validate as default };
