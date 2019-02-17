import React from 'react';
import Head from 'next/head';

export const holidays = [
  '2/18/2019',
  '5/27/2019',
  '7/04/2019',
  '7/05/2019',
  '9/02/2019',
  '11/28/2019',
  '11/29/2019',
  '12/24/2019',
  '12/25/2019'
];

export function convert(date) {
  return date.toLocaleDateString();
}

export function NextHead() {
  return (
    <Head>
      <title>isitaturnerholidaytoday 🤔</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export function Tomorrow() {
  return (
    <div className="tomorrow">
      <p>Tomorrow is a holiday. Enjoy your sleep 😴</p>
      <style jsx>{`
        .tomorrow {
          text-align: center;
        }
        .tomorrow p {
          font: 16px Helvetica, Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}

export default class Index extends React.Component {
  static async getInitialProps() {
    const today = new Date();
    const isHoliday = holidays.includes(convert(today));
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tmrwIsHoliday = holidays.includes(convert(tomorrow));
    return {
      isHoliday: isHoliday ? 'YES' : 'NO',
      tmrwIsHoliday
    };
  }

  render() {
    return (
      <div>
        <NextHead />
        <p className="isit">is it a Turner holiday today?</p>
        <p className="answer">{this.props.isHoliday}</p>
        {this.props.tmrwIsHoliday && <Tomorrow />}
        <style jsx>{`
          .isit {
            font: 16px Helvetica, Arial, sans-serif;
            text-align: center;
          }
          .answer {
            font: 100px Helvetica, Arial, sans-serif;
            font-weight: bolder;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
