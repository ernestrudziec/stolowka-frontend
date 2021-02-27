import React, { useEffect, useMemo, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import LEFT_ARROW_ICON from '../../../../assets/AdminView/Calendar/arrow-left.svg';
import RIGHT_ARROW_ICON from '../../../../assets/AdminView/Calendar/arrow-right.svg';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default () => {
  const today = new Date();

  const [date, setDate] = useState({
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  });

  const [changedDays, setChangedDays] = useState([]);

  const updateChangedDays = (dateString, status) => {
    const isDayActuallyStored = changedDays.findIndex((item) => {
      if (item.date == dateString) {
        return true;
      } else return false;
    });

    if (isDayActuallyStored === -1) {
      setChangedDays([...changedDays, { date: dateString, status: status }]);
    } else {
      let array = changedDays;

      array[isDayActuallyStored] = { date: dateString, status: status };
      setChangedDays(array);
    }

    console.log(changedDays);
  };

  const getPLMonthName = (monthNumber) => {
    switch (monthNumber) {
      case 1:
        return 'Styczeń';
        break;
      case 2:
        return 'Luty';
        break;
      case 3:
        return 'Marzec';
        break;
      case 4:
        return 'Kwiecień';
        break;
      case 5:
        return 'Maj';
        break;
      case 6:
        return 'Czerwiec';
        break;
      case 7:
        return 'Lipiec';
        break;
      case 8:
        return 'Sierpień';
        break;
      case 9:
        return 'Wrzesień';
        break;
      case 10:
        return 'Październik';
        break;
      case 11:
        return 'Listopad';
        break;
      case 12:
        return 'Grudzień';
        break;
    }
  };

  const goToNextMonth = () => {
    if (date.month == 12) {
      setDate({
        day: date.day,
        month: 1,
        year: date.year + 1
      });
    } else {
      setDate({
        day: date.day,
        month: date.month + 1,
        year: date.year
      });
    }
  };

  const goToPreviousMonth = () => {
    if (date.month == 1) {
      setDate({
        day: date.day,
        month: 12,
        year: date.year - 1
      });
    } else {
      setDate({
        day: date.day,
        month: date.month - 1,
        year: date.year
      });
    }
  };

  const getWeekdayNumber = (day) => {
    switch (day) {
      case 'Monday':
        return 1;
        break;
      case 'Tuesday':
        return 2;
        break;
      case 'Wednesday':
        return 3;
        break;
      case 'Thursday':
        return 4;
        break;
      case 'Friday':
        return 5;
        break;
      case 'Saturday':
        return 6;
        break;
      case 'Sunday':
        return 7;
        break;
    }
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInPreviousMonth = (month, year) => {
    let correctYear = year;

    let correctMonth = () => {
      if (month == 1) {
        return 12;
      } else {
        return month - 1;
      }
    };

    if (month - 1 == 0) {
      correctYear = year - 1;
    }

    return new Date(correctYear, correctMonth(), 0).getDate();
  };

  const getWeekday = (day, month, year) => {
    let dateStr = `${month}/${day}/${year}`;

    let date = new Date(dateStr);
    return getWeekdayNumber(date.toLocaleDateString('en-US', { weekday: 'long' }));
  };

  const isWeekend = (day) => {
    return day % 7 == 0 || (day + 1) % 7 == 0;
  };

  const isToday = (day, month, year) => {
    const todaysDate = new Date();

    if (todaysDate.getDate() == day && todaysDate.getMonth() + 1 == month && todaysDate.getFullYear() == year) {
      return true;
    } else return false;
  };

  const Cell = useMemo(
    () => ({ index, date, changedDays, setChangedDays, updateChangedDays }) => {
      //normal //present // unpresent // freeday

      const [status, setStatus] = useState('normal');

      let day = index + 1;
      let dayMonthStartsOn = getWeekday(1, date.month, date.year);
      let correctDay = day - dayMonthStartsOn + 1;
      let weekdayNumber = getWeekday(correctDay, date.month, date.year);
      let lastMonthDaysNumber = daysInPreviousMonth(date.month, date.year);
      let daysInCurrentMonth = daysInMonth(date.month, date.year);
      let dateString = `${correctDay}.${date.month < 10 ? '0' + date.month : date.month}.${date.year}`;

      const updateStatus = (day) => {
        const getStatus = (s) => {
          if (s === 'normal') {
            return 'present';
          } else if (s === 'present') {
            return 'absent';
          } else if (s === 'absent') {
            return 'freeday';
          } else {
            return 'normal';
          }
        };

        updateChangedDays(dateString, getStatus(status));

        if (status === 'normal') {
          setStatus('present');
        } else if (status === 'present') {
          setStatus('absent');
        } else if (status === 'absent') {
          setStatus('freeday');
        } else {
          setStatus('normal');
        }
      };

      useEffect(() => {
        changedDays.map((item) => {
          if (item.date === dateString) {
            if (status !== item.status) {
              setStatus(item.status);
            }
          }
        });
      }, []);

      if (day >= dayMonthStartsOn && day <= daysInCurrentMonth + dayMonthStartsOn - 1) {
        return (
          <div
            onClick={() => updateStatus()}
            className={`cell ${isWeekend(day) ? 'weekend' : ''} ${status} ${
              isToday(correctDay, date.month, date.year) ? 'today' : ''
            }`}
          >
            {correctDay}
          </div>
        );
      } else if (day <= dayMonthStartsOn) {
        return (
          <div className={`cell ${isWeekend(day) ? 'weekend' : ''} another-month ${status}`}>
            {lastMonthDaysNumber + correctDay}
          </div>
        );
      } else {
        return (
          <div className={`cell ${isWeekend(day) ? 'weekend' : ''} another-month ${status}`}>
            {correctDay - daysInMonth(date.month, date.year)}
          </div>
        );
      }
    },
    [date]
  );

  const TopRow = () => {
    return (
      <div className="row">
        <div className="cell info">PN</div>
        <div className="cell info">WT</div>
        <div className="cell info">ŚR</div>
        <div className="cell info">CZ</div>
        <div className="cell info">PT</div>
        <div className="cell info weekend">S</div>
        <div className="cell info weekend">N</div>
      </div>
    );
  };

  useEffect(() => {
    console.log(changedDays);
  }, [changedDays]);

  return (
    <div className="calendar">
      <div className="controls-wrapper">
        <button onClick={() => goToPreviousMonth()} className="arrow">
          <img src={LEFT_ARROW_ICON} />
        </button>
        <SwitchTransition>
          <CSSTransition key={date.month} timeout={200} classNames="fade-left-to-right">
            <div className="date">{getPLMonthName(date.month) + ' ' + date.year}</div>
          </CSSTransition>
        </SwitchTransition>
        <button onClick={() => goToNextMonth()} className="arrow">
          <img src={RIGHT_ARROW_ICON} />
        </button>
      </div>
      <SwitchTransition>
        <CSSTransition key={date.month} timeout={100} classNames="fade">
          <div className="inner-wrapper">
            <TopRow />
            <div className="cells-wrapper">
              {[...Array(42)].map((item, index) => {
                return (
                  <Cell
                    updateChangedDays={updateChangedDays}
                    date={date}
                    changedDays={changedDays}
                    setChangedDays={setChangedDays}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className="legend">
        <div className="item">
          <div className="cell" />
          <p>czynne</p>
        </div>
        <div className="item">
          <div className="cell today" />
          <p>dzisiaj</p>
        </div>
        <div className="item">
          <div className="cell freeday" />
          <p>nieczynne</p>
        </div>

        <div className="item">
          <div className="cell present" />
          <p>posiłki wydane</p>
        </div>
      </div>
    </div>
  );
};
