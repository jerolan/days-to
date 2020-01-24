import React from "react";
import classnames from "classnames";
import { useFormik } from "formik";

import { DateEvent } from "../../context/DateEventsContext";
import Field from "./Field";
import Submit from "./Submit";
import ToolBar, { ToolBarItem } from "../ToolBar";

type EventFormProps = {
  onToggleModal: () => void;
  onEventSubmit: (event: DateEvent) => void;
  show: boolean;
};

type EventFormValues = {
  title: string;
  date: Date;
};

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
    onSubmit: (values: EventFormValues) => {
      onEventSubmit({
        title: values.title,
        date: new Date(values.date)
      });

      onToggleModal();
      formik.resetForm();
    }
  });

  // TODO: Decide if EventFormBackground and EventFormWrapper
  // should they be a component
  const eventFormBackgroundClassNames = classnames("absolute bg-black", {
    hidden: !show,
    "flex animated fadeIn inset-0": show
  });

  const eventFormWrapperClassNames = classnames(
    "flex-1 relative bg-white p-4",
    {
      "animated slideInUp": show
    }
  );

  return (
    <div className={eventFormBackgroundClassNames}>
      <div className={eventFormWrapperClassNames}>
        <ToolBar>
          <ToolBarItem onClick={onToggleModal}>Close</ToolBarItem>
        </ToolBar>
        <form onSubmit={formik.handleSubmit}>
          <Field
            required
            label="Titulo"
            id="title"
            name="title"
            placeholder="El Cumpleaños de mi Papá"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <Field
            label="Fecha"
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date.toString()}
            min={formik.initialValues.date.toISOString().split("T")[0]}
          />
          <Submit>Guardar</Submit>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
