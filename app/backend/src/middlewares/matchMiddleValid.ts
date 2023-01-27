import { NextFunction, Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import MatcheValidate from '../validates/matche.validate';

export default class MatchMiddleValid {
  static valid = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const valid = new MatcheValidate(body);
    const isValid = valid.matchWithTwoEqual();
    const isExist = await valid.existTeams();

    if (!isValid) {
      return res.status(statusCode.invalidTeams).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    if (!isExist) {
      return res.status(statusCode.notFound).json({ message: 'There is no team with such id!' });
    }

    next();
  };
}
