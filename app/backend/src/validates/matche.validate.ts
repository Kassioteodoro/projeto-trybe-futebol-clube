import Team from '../database/models/Team';
import IMatches from '../interfaces/IMatches';

export default class MatcheValidate {
  constructor(
    private match: IMatches,
  ) {}

  matchWithTwoEqual(): boolean {
    if (this.match.homeTeamId === this.match.awayTeamId) return false;
    return true;
  }

  existTeams = async () => {
    const homeTeam = await Team.findOne({ where: { id: this.match.homeTeamId } });
    const awayTeam = await Team.findOne({ where: { id: this.match.awayTeamId } });
    if (!homeTeam && !awayTeam) return false;
    return true;
  };
}
