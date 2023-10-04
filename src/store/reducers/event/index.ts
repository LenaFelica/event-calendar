import { IEvent } from './../../../models/IEvent';
import { EventActionEnum, EventsAction, EventState } from "./types";

const initialState: EventState = {
   guests: [],
   events: [],
}

export default function EventReducer(state = initialState, action: EventsAction): EventState  {
   switch(action.type) {
      case EventActionEnum.SET_GUESTS:
         return { ...state, guests: action.payload}
      case EventActionEnum.SET_EVENTS:
         return { ...state, events: action.payload}

      default:
         return state;
   }
}