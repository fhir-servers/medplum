/*
 * This is a generated file
 * Do not edit manually.
 */

import { Bot } from './Bot';
import { Device } from './Device';
import { Endpoint } from './Endpoint';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * Configuration details for an instance of the Medplum agent
 * application.
 */
export interface Agent {

  /**
   * This is a Agent resource
   */
  readonly resourceType: 'Agent';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * An identifier for this agent.
   */
  identifier?: Identifier[];

  /**
   * The human readable friendly name of the agent.
   */
  name: string;

  /**
   * The status of the agent.
   */
  status: 'active' | 'off' | 'error';

  /**
   * Optional device resource representing the device running the agent.
   */
  device?: Reference<Device>;

  /**
   * The settings for the agent.
   */
  setting?: AgentSetting[];

  /**
   * Details where to send notifications when resources are received that
   * meet the criteria.
   */
  channel?: AgentChannel[];
}

/**
 * Details where to send notifications when resources are received that
 * meet the criteria.
 */
export interface AgentChannel {

  /**
   * The channel name.
   */
  name: string;

  /**
   * The channel endpoint definition including protocol and network binding
   * details.
   */
  endpoint: Reference<Endpoint>;

  /**
   * The target resource where channel messages will be delivered.
   */
  targetReference?: Reference<Bot>;

  /**
   * The target resource where channel messages will be delivered.
   */
  targetUrl?: string;
}

/**
 * The target resource where channel messages will be delivered.
 */
export type AgentChannelTarget = Reference<Bot> | string;

/**
 * The settings for the agent.
 */
export interface AgentSetting {

  /**
   * The setting name.
   */
  name: string;

  /**
   * The setting value.
   */
  valueString?: string;

  /**
   * The setting value.
   */
  valueBoolean?: boolean;

  /**
   * The setting value.
   */
  valueDecimal?: number;

  /**
   * The setting value.
   */
  valueInteger?: number;
}

/**
 * The setting value.
 */
export type AgentSettingValue = boolean | number | string;
