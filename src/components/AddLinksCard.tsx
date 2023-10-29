import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import LinkInstructionSVG from "../assets/LinkInstructionSVG";
import Button from "./Button";
import Card from "./Card";
import { displayNameFromName } from "../util/data";
import LocalStorage from "../util/localStorage";
import { useEffect } from "react";
import { useAlert } from "../util/AlertProvider";
import SaveIcon from "../assets/icons/Save.svg";
import LinkCard from "./LinkCard";
import { linkItemT, useLink } from "../util/DataProvider";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function AddLinksCard({}: {}) {
  const {
    register,
    handleSubmit,
    unregister,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();
  const alert = useAlert();
  const linkContext = useLink();
  const listOfSelectedLinks = linkContext.links;

  useEffect(() => {
    LocalStorage.getLinks().forEach((link) => {
      setValue(`linkInput${link.id}`, link.link);
    });
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const remapedData: linkItemT[] = Object.keys(data).map((key) => {
      console.log("addLinkscard onSubmit: ", key);
      const link = data[key];
      const platformName = link.split("www.")[1].split(".")[0];
      return {
        platformName: displayNameFromName(platformName),
        link,
        id: key,
      };
    });

    LocalStorage.saveLinkList(remapedData);
    alert.showAlert("Your changes have been successfully saved!", <SaveIcon />);
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over === null) return;

    console.log(active, over);
    console.log("ind", active.id, over.id);

    if (active.id !== over.id) {
      const activeIndex = listOfSelectedLinks.findIndex(
        (link) => link.id === active.id
      );
      const overIndex = listOfSelectedLinks.findIndex(
        (link) => link.id === over.id
      );

      linkContext.swapLinks(activeIndex, overIndex);
    }
  }

  return (
    <Card className="home__article-r">
      <form onSubmit={handleSubmit(onSubmit)} className="article__right-form">
        <div className="right__container">
          <div className="right__title">
            <span className="right__title-heading heading__text-m">
              Customize your links
            </span>
            <span className="right__title-description body__text-s text-gray">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </span>
          </div>

          <div className="right__body">
            <Button
              name="addLinkButton"
              secondary
              onClick={(e) => {
                e.preventDefault();
                linkContext.addLink();
              }}
            >
              + Add new link
            </Button>
            {listOfSelectedLinks.length === 0 ? (
              <div className="right__body-links">
                <LinkInstructionSVG />
                <div className="right__body-instructions">
                  <span className="heading__text-m">Let's get you started</span>
                  <span className="body__text-s text-gray">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </span>
                </div>
              </div>
            ) : (
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={listOfSelectedLinks}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="link__container-wrapper">
                    <div className="link__container-wrapper-inner">
                      {listOfSelectedLinks.map((link, key) => (
                        <LinkCard
                          index={key}
                          key={key}
                          link={link}
                          unregister={unregister}
                          register={register}
                          errors={errors}
                        />
                      ))}
                    </div>
                  </div>
                </SortableContext>
              </DndContext>
            )}
          </div>
        </div>

        <div className="right__footer">
          <Button
            type="submit"
            className="expandable"
            disabled={listOfSelectedLinks.length === 0}
          >
            Save
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default AddLinksCard;
