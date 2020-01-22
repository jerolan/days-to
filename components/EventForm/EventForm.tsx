import React from "react";
import classnames from "classnames";
import { useFormik } from "formik";

import { DateEvent } from "../Event";
import Field from "./Field";
import Submit from "./Submit";
import EventFormWrapper from "./EventFormWrapper";

export interface EventFormProps {
  onToggleModal: () => void;
  onEventSubmit: (event: DateEvent) => void;
  show: boolean;
}

interface FormValues {
  title: string;
  date: Date;
}

const EventForm: React.FunctionComponent<EventFormProps> = ({
  show,
  onEventSubmit,
  onToggleModal
}) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      date: new Date()
    },
    onSubmit: (values: FormValues) => {
      onEventSubmit({
        id: "",
        title: values.title,
        date: values.date
      });

      onToggleModal();
    }
  });

  const className = classnames("absolute bg-black", {
    hidden: !show,
    "flex animated fadeIn inset-0": show
  });

  return (
    <div className={className}>
      <EventFormWrapper show={show}>
        <div className="py-1" onClick={onToggleModal}>
          <p className="font-medium text-right cursor-pointer">Close</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Field
            required
            label="Titulo"
            placeholder="El Cumpleaños de mi Papá"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <Field
            id="date"
            label="Fecha"
            placeholder="10/10/2021"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date.toString()}
          />
          <Submit>Guardar</Submit>
        </form>
      </EventFormWrapper>
    </div>
  );
};

export default EventForm;
