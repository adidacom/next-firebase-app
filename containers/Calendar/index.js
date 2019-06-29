import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import ModalEvents from './modalEvents';
import notification from '../../components/notification';
import calendarActions from '../../redux/calendar/actions';

import { CalendarStyleWrapper } from './calendar.style';

const Localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);
const { changeView, changeEvents } = calendarActions;

const mapToRBCFormat = e =>
  Object.assign({}, e, {
    start: new Date(e.start),
    end: new Date(e.end),
  });

const getIndex = (events, selectedEvent) =>
  events.findIndex(event => event.id === selectedEvent.id);

class DndCalendar extends Component {
  state = {
    view: this.props.view,
    modalVisible: false,
    selectedData: undefined,
  };

  onSelectEvent = selectedData => {
    this.setState({ modalVisible: 'update', selectedData });
  };
  onSelectSlot = selectedData => {
    this.setState({ modalVisible: 'new', selectedData });
  };

  onView = view => {
    this.props.changeView(view);
  };
  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events, changeEvents } = this.props;
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };
    const idx = getIndex(events, updatedEvent);
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);
    changeEvents(nextEvents);

    notification(
      'success',
      'Move event successfully',
      `${event.title} was dropped onto ${event.start}`
    );
  };

  resizeEvent = ({ event, start, end }) => {
    const { events, changeEvents } = this.props;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    changeEvents(nextEvents);

    notification(
      'success',
      'Resize event successfully',
      `${event.title} was resized to ${start}-${end}`
    );
  };

  setModalData = (type, selectedData) => {
    const { changeEvents } = this.props;
    const events = [...this.props.events];
    const { modalVisible } = this.state;
    if (type === 'cancel') {
      this.setState({
        modalVisible: false,
        selectedData: undefined,
      });
    } else if (type === 'delete') {
      const idx = getIndex(events, selectedData);
      if (idx > -1) {
        events.splice(idx, 1);
      }
      changeEvents(events);
      this.setState({
        modalVisible: false,
        selectedData: undefined,
      });
    } else if (type === 'updateValue') {
      this.setState({ selectedData });
    } else {
      if (modalVisible === 'new') {
        events.push(selectedData);
      } else {
        const idx = getIndex(events, selectedData);
        if (idx > -1) {
          events[idx] = selectedData;
        }
      }
      changeEvents(events);
      this.setState({
        modalVisible: false,
        selectedData: undefined,
      });
    }
  };

  render() {
    return (
      <CalendarStyleWrapper className="isomorphicCalendarWrapper">
        <ModalEvents
          modalVisible={this.state.modalVisible}
          selectedData={this.state.selectedData}
          setModalData={this.setModalData}
        />
        <DragAndDropCalendar
          className="isomorphicCalendar"
          selectable
          localizer={Localizer}
          events={this.props.events.map(mapToRBCFormat)}
          onEventDrop={this.moveEvent}
          resizable
          onEventResize={this.resizeEvent}
          onSelectEvent={this.onSelectEvent}
          onSelectSlot={this.onSelectSlot}
          onView={this.onView}
          defaultView={BigCalendar.Views.MONTH}
          defaultDate={new Date()}
          step={60}
        />
      </CalendarStyleWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { events, view } = state.Calendar;
  return { events, view };
}
export default connect(
  mapStateToProps,
  { changeView, changeEvents }
)(DndCalendar);
