import { NextFunction, Request, Response } from 'express';
import MatcheValidate from '../validates/matche.validate';
// import statusCode from '../utils/statusCode';

export default class MatchMiddleValid {
  static valid = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const valid = new MatcheValidate(body);
    const isValid = valid.matchWithTwoEqual();
    const isExist = await valid.existTeams();

    if (!isValid) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    if (!isExist) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    next();
  };
}
