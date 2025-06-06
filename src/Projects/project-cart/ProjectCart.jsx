import React from 'react';
import { IoHeartSharp } from "react-icons/io5";
import smile from '../../assets/img/Smile_rating.svg';
import './style.scss';

const ProjectCart = ({ project }) => {
  return (
    <div className="project-card">
    <div className="project-item-card">
      <div className="project-header">
        <div className="project-rating">
          <img src={smile} alt="Рейтинг" />
          <span>{project.rating}</span>
        </div>
        <button className="project-fav" aria-label="В избранное">
          <IoHeartSharp />
        </button>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-subtitle">Для этого проекта нужны специалисты:</p>
        <div className="project-tags">
          {project.specialists.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
          {project.specialists.length > 3 && (
            <span className="tag tag-more">+{project.specialists.length - 3}</span>
          )}
        </div>
        </div>
        </div>
        <div className="project-footer">
          <p className="project-price">{project.price.toLocaleString()} <span>C</span> </p>
          <button className="project-btn">Подробно</button>
        </div>
    </div>
  );
};

export default ProjectCart;
