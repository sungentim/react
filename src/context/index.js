/*
 * @Author: sungen
 * @since: 2024-04-23 11:51:43
 * @desc: 
 * @LastEditTime: 2024-04-23 16:10:37
 * @LastEditors: sungen
 */
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading >主标题</Heading>
      <Section >
        <Heading >副标题</Heading>
        <Heading >副标题</Heading>
        <Heading >副标题</Heading>
        <Section >
          <Heading >子标题</Heading>
          <Heading >子标题</Heading>
          <Heading >子标题</Heading>
          <Section >
            <Heading >子子标题</Heading>
            <Heading >子子标题</Heading>
            <Heading >子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}