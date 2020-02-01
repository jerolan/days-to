import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import emoji from "node-emoji";

import { DateEvent } from "../../context/DateEventsContext";
import EventFormLayout from "./EventFormLayout";
import Field from "../Field";
import Button from "../Button";
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
        emoji: emoji.random().emoji,
        title: values.title,
        date: new Date(values.date)
      });

      onToggleModal();
      formik.resetForm();
    }
  });

  return (
    <EventFormLayout show={show}>
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
        <div className="flex">
          <div className="mx-1 flex-1	">
            <Link
              href={{
                pathname: "/event",
                query: {
                  title: formik.values.title,
                  date: new Date(formik.values.date).toLocaleDateString(),
                  emoji: emoji.random().emoji
                }
              }}
            >
              <a target="_blank">
                <Button>Compartir</Button>
              </a>
            </Link>
          </div>
          <div className="mx-1 flex-1">
            <Button type="submit">Guardar</Button>
          </div>
        </div>
      </form>
    </EventFormLayout>
  );
};

export default EventForm;
