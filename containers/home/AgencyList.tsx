import CircleItem from './common';

const agencyItems = [
  {
    agencyName: 'HYBE',
    agencyLogo: '/mocks/agency_hybe.png',
  },
  {
    agencyName: 'JYP',
    agencyLogo: '/mocks/agency_jyp.png',
  },
  {
    agencyName: 'SM',
    agencyLogo: '/mocks/agency_sm.png',
  },
  {
    agencyName: 'YG',
    agencyLogo: '/mocks/agency_yg.png',
  },
  {
    agencyName: 'CUBE',
    agencyLogo: '/mocks/agency_cube.png',
  },
  {
    agencyName: 'STARSHIP',
    agencyLogo: '/mocks/agency_starship.png',
  },
  {
    agencyName: 'PLEDIS',
    agencyLogo: '/mocks/agency_pledis.png',
  },
  {
    agencyName: 'PLEDIS',
    agencyLogo: '/mocks/agency_pledis.png',
  },
  {
    agencyName: 'PLEDIS',
    agencyLogo: '/mocks/agency_pledis.png',
  },
  {
    agencyName: 'PLEDIS',
    agencyLogo: '/mocks/agency_pledis.png',
  },
];

export default function AgencyList() {
  return (
    <section className="flex gap-10">
      {agencyItems.map(({ agencyLogo, agencyName }) => (
        <CircleItem logo={agencyLogo} label={agencyName} />
      ))}
    </section>
  );
}
